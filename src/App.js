import React from 'react';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

//S: server and files cfg
var ServerUrl= window.location.href.match(/(https?:\/\/[^\/]+)/)[0]; //A: tomar protocolo, servidor y puerto de donde esta esta pagina

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: ServerUrl
}

function App() {
  return (
    <div className="App" style={{ height: '480px' }}>
      <FileManager>
        <FileNavigator
          id="filemanager-1"
          api={connectorNodeV1.api}
          apiOptions={apiOptions}
          capabilities={connectorNodeV1.capabilities}
          listViewLayout={connectorNodeV1.listViewLayout}
          viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
        />
      </FileManager>
    </div>
  );
}

export default App;
