import '../css/main.scss';

const sum = () => {
  return 3 + 3;
}

document.getElementById('app').innerHTML = `
<p>Cool stuff: ${sum()}</p>
`;
