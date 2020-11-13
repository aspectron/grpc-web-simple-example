## Setup 

- ```sh git clone https://github.com/aspectron/grpc-web-simple-example ```
- ```sh git clone https://github.com/aspectron/flow-grpc-web ```
- ```sh git clone https://github.com/aspectron/flow-grpc-proxy ```

## Run kaspad
- ```sh git clone https://github.com/aspectron/kaspad ```
- ```sh cd kaspad ```
- ```sh go run main.go --testnet ```

## Start a sample web server which is using "flow-grpc-proxy"
- ```sh cd ../grpc-web-simple-example ```
- ```sh npm install ```
- ```sh node web-server ```

##load test page 
load http://localhost:3000/ in browser
from chrome devtool/console u can test kaspad grpc as bellow
```js
testStream({ getMempoolEntriesRequest:{} })
testStream({ resolveFinalityConflictRequest:{} })
```
