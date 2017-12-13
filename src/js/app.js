import '../css/main.scss';
import {
  add
} from './math';
let myName = 'Carlos';
const sum = () => {
  return 3 + 8;
}

document.getElementById('app').innerHTML = `
<p>Cool stuff: ${sum()}</p>
<p>More ${myName}stuff: ${add(2,2)}</p>
`;


if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
