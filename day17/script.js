let colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', generateColor);

 /* Explanation of generateColor():
 There are 256 possible values for each of the three rgb values (0 - 255). So the number 16777216 is just 256 ** 3. The toString() method at the end of the generated number converts the number to a hexadecimal value. The hexadecimal value is then appended to '#'. 
 */
function generateColor(e) {
    let bodyText = document.querySelector('#body-text');
    let bodyColor = '#' + Math.floor(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = bodyColor;
    bodyText.innerHTML = `Body background color: <span class="color">${bodyColor}</span>`;

    let btnText = document.querySelector('#btn-text');
    let btnColor = '#' + Math.floor(Math.random() * 16777216).toString(16);
    e.target.style.backgroundColor = btnColor;
    btnText.innerHTML = `Button background color: <span class="color">${btnColor}</span>`;
}