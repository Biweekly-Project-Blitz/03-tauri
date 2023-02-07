const { invoke } = window.__TAURI__.tauri;

let docker_images_button;
let docker_images_text;

async function fetch_docker_images() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  docker_images_text.textContent = await invoke("greet", {});
}

window.addEventListener("DOMContentLoaded", () => {
  docker_images_text = document.querySelector("#docker-images");
  document
    .querySelector("#docker-images-button")
    .addEventListener("click", () => fetch_docker_images());
});
