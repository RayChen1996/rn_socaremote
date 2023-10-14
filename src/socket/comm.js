// import {Socket} from 'react-native-tcp';

import TcpSocket from 'react-native-tcp';

const hexString = 'A1A2000191000090E1E2';

const opendoor = 'A1A200018D0001018CE1E2';

const pkStart = 'a1a2';

const pkEnd = 'e1e2';

export const ReadMachineInfo = () => {
  return new Promise((resolve, reject) => {
    const socket = TcpSocket.createConnection(
      {
        host: '60.249.1.226',
        port: 4444,
      },
      () => {
        // The connection is established.
        console.log('Connected to server');
        connected = true; // 标记连接已成功

        const buffer = Buffer.from(hexString, 'hex');

        socket.write(buffer);

        // Listen for data
        socket.on('data', data => {
          console.log('Received data:', data);
          resolve(data); // Resolve the Promise with the received data
          socket.end(); // Close the connection
        });

        socket.on('error', error => {
          if (error.code === 'ECONNRESET') {
            console.error('Connection reset by peer');
            // 在这里可以执行处理连接被服务器重置的操作
          } else {
            console.error('Socket error:', error);
            reject(error); // Reject the Promise with the error
          }
          console.error('Socket error:', error);
          // reject(error); // Reject the Promise with the error
          socket.end(); // Close the connection
        });

        // socket.end();
      },
    );
  });
};
export const OpenDoor = () => {
  return new Promise((resolve, reject) => {
    const socket = TcpSocket.createConnection(
      {
        host: '60.249.1.226',
        port: 4444,
      },
      () => {
        // The connection is established.
        console.log('Connected to server');
        connected = true; // 标记连接已成功

        const buffer = Buffer.from(opendoor, 'hex');

        socket.write(buffer);

        // Listen for data
        socket.on('data', data => {
          console.log('Received data:', data);
          resolve(data); // Resolve the Promise with the received data
          socket.end(); // Close the connection
        });

        socket.on('error', error => {
          if (error.code === 'ECONNRESET') {
            console.error('Connection reset by peer');
            // 在这里可以执行处理连接被服务器重置的操作
          } else {
            console.error('Socket error:', error);
            reject(error); // Reject the Promise with the error
          }
          console.error('Socket error:', error);
          // reject(error); // Reject the Promise with the error
          socket.end(); // Close the connection
        });

        // socket.end();
      },
    );
  });
};
export const ReadMachineRecord = async () => {
  return '';
};

export default {
  ReadMachineInfo,
  ReadMachineRecord,
};
