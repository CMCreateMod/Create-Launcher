<script lang="js">
  import { fs, invoke } from "@tauri-apps/api";
  import { ResponseType, getClient } from "@tauri-apps/api/http";
  import { type } from '@tauri-apps/api/os';
  
  let version = "release";
  let promise;

  function onClickPlay() {
      promise = download_jre();
  }

  async function download_jre() {
    const osType = await type();
    const client = await getClient();

    let target = await invoke("get_executable_file_path");
    target = target.split("\\");
    target = target.splice(0, target.length-1).join("\\") + "\\jre\\";

    console.log(target);

    let url;
    if(osType == "Windows_NT") {
      url = "https://api.adoptium.net/v3/binary/latest/17/ga/windows/x64/jre/hotspot/normal/eclipse?project=jdk";
    }else if(osType == "Linux") {
      url = "https://api.adoptium.net/v3/binary/latest/17/ga/linux/x64/jre/hotspot/normal/eclipse?project=jdk";
    }else if(osType == "Darwin") {
      url = "https://api.adoptium.net/v3/binary/latest/17/ga/mac/x64/jre/hotspot/normal/eclipse?project=jdk";
    }

    console.log(url);

    const data = await client.get(url, {
      responseType: ResponseType.Binary,
    });

    let filename = data.headers["content-disposition"].split("filename=")[1];

    console.log(filename);

    fs.createDir(target);

    await fs.writeBinaryFile(
      target + filename,
      data.data
    );
  }
</script>
{#if promise == null}
  <form on:submit|preventDefault={onClickPlay} class="mt-auto">
    <select bind:value={version} class="backdrop-blur-lg text-2xl appearance-none flex-1 py-2 px-6 rounded-r-sm rounded-l-xl outline-none transition-all duration-300 shadow-md shadow-black bg-black bg-opacity-50 text-white">
      <option value="release" selected>Release</option>
      <option value="dev">Dev</option>
    </select>
    <button type="submit" class="backdrop-blur-lg text-2xl py-2 px-6 hover:px-8 rounded-l-sm rounded-r-xl transition-all duration-300 shadow-md shadow-black bg-black bg-opacity-50 text-white
    hover:bg-green-500">Play</button>
  </form>
{:else}
  {#await promise}
  <p class="mt-auto text-white">Loading...</p>
  {:then result}
  <p class="mt-auto text-white">{result}</p>
  {/await}
{/if}