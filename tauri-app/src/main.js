const { invoke } = window.__TAURI__.tauri;

const fetch_docker_images = async () => {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  const localResult = await invoke("greet", {});
  return localResult
}

function TableDisplay(props) {
  if (!props.data) {
    return null;
  }
  const inputData = JSON.parse(props.data);
  const DisplayData = inputData.map(
    (info) => {
      return (
        <tr key={info.ID}>
          <td>{info.CreatedAt}</td>
          <td>{info.Repository}</td>
          <td>{info.Size}</td>
          <td>{info.Tag}</td>
          <td>{info.VirtualSize}</td>
        </tr>
      )
    }
  )
  return (
    <div>
      <table style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>Created At</th>
            <th>Repository</th>
            <th>Size</th>
            <th>Tag</th>
            <th>Virtual Size</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  )
}

function DockerTable() {
  const [dockerData, set_dockerData] = React.useState(null);

  return (
    <div>
      <button onClick={() => fetch_docker_images().then(result => {
        set_dockerData(result)
      })}>
        Get Docker Images
      </button>
      <TableDisplay data={dockerData} />
    </div>
  )
}

const rootNode = document.getElementById('docker-container-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<DockerTable />);
