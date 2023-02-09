const { invoke } = window.__TAURI__.tauri;

let docker_images_text = document.querySelector("#docker-images");

const fetch_docker_images = async() => {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  const localResult = await invoke("greet", {});
  console.log(localResult)
  return localResult
}

function dockerTable() {
  const [dockerData, set_dockerData] = React.useState(null);

  return React.createElement(
    "div",
    null,
    React.createElement(
      'button',
      {
        onClick: () => { 
          fetch_docker_images().then(result=>{
            set_dockerData(result);
          })
        }
      },
      'Get Docker images'
    ),
  );
}

const rootNode = document.getElementById('docker-container-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(dockerTable));
