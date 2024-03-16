// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::PathBuf;

#[tauri::command]
fn get_executable_file_path() -> Result<PathBuf, String> {
    match std::env::current_exe() {
        Ok(path) => return Ok(path),
        Err(error) => return Err(format!("{error}")),
    }
} 

#[tauri::command]
fn exit_app() {
  std::process::exit(0x0);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_executable_file_path, exit_app])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
