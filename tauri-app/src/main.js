const { invoke } = window.__TAURI__.tauri;

let docker_images_text = document.querySelector("#docker-images");

async function fetch_docker_images() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  docker_images_text.textContent = await invoke("greet", {});
}

function LikeButton() {
  const [liked, setLiked] = React.useState();

  return React.createElement(
    'button',
    {
      onClick: () => fetch_docker_images(),
    },
    'Get Docker images',
    React.createElement(
      'h1',
      null,
      'Welcome!',
    ),
  );
}

const rootNode = document.getElementById('docker-container-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
