import NetworkSpeed from 'network-speed';

const testNetworkSpeed = new NetworkSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  return speed;
}

export default getNetworkDownloadSpeed();
