<script>
  import { invoke } from "@tauri-apps/api";
  import PlayButton from './lib/PlayButton.svelte'
  
  document.addEventListener('contextmenu', event => event.preventDefault()); 
  document.addEventListener('dragstart', event => event.preventDefault())

  document.addEventListener('keydown', event => {
    if(event.key == "Escape")
      invoke("exit_app");
  });

  let root = document.documentElement;
  document.addEventListener('mousemove', event => {
    root.style.setProperty('--mouse-x', event.clientX + "px")
    root.style.setProperty('--mouse-y', event.clientY + "px")
  });

</script>

<div class="grid overflow-hidden">
  <img src="background.png" alt="background" class="col-start-1 row-start-1 object-cover w-screen h-screen background-paralax"/>
  <div class="col-start-1 row-start-1 object-cover w-screen h-screen background-overlay"></div>
  <main class="col-start-1 row-start-1 grid place-items-center w-screen h-screen">
    <div class="flex flex-row h-full w-full p-16 gap-16">
      <div class="flex-1 flex flex-col justify-between mr-auto">
        <div class="flex h-min gap-4 w-fit glass p-4">
          <img src="logo.png" alt="logo" class="aspect-square max-h-16"/>
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl text-white">Create Mod</h1>
            <h1 class="text-lg text-gray-400 -mt-1">Launcher <span class="ml-auto">v0.1.0</span></h1>
          </div>
        </div>
        <div class="flex items-center h-min gap-4 w-fit p-4 glass">
          <a href="https://createmod.io" target="_blank">
            <img src="createmod.png" alt="create mod" class="social-icon"/>
          </a>
          <a href="https://youtube.com/@CMCreateMod" target="_blank">
            <img src="youtube.png" alt="youtube" class="social-icon"/>
          </a>
          <a href="https://patreon.com/CreateMod" target="_blank">
            <img src="patreon.png" alt="patreon" class="social-icon"/>
          </a>
          <a href="https://discord.gg/Ufz5XAyGrV" target="_blank">
            <img src="discord.png" alt="discord" class="social-icon"/>
          </a> 
        </div>
      </div>
      <div class="flex flex-col justify-between items-center max-w-80 p-8 glass">
        <h2 class="text-3xl text-white mb-12 underline underline-offset-4 decoration-gray-400">Patch 0.2.3-b7</h2>
        <ul class="text-md text-white space-y-2">
          <li>New Level Encoding CMXE</li>
          <li>Fun new things</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, consequatur.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam! Unde nostrum atque soluta nemo eos velit facere, assumenda fuga tenetur quas est voluptatem voluptate impedit facilis, molestias molestiae doloremque sed dolor asperiores!</li>
        </ul>
        <PlayButton />
      </div>
    </div>
  </main>
</div>