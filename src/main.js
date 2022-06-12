console.log('hi')
let html = document.querySelector('#html')
let style = document.querySelector("#style")
let string = `/* 你好，我叫小胡
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，我把div变成一个圆
 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`

let string2 = ''
let n = 0
// string = string.replace("\n","<br>")//replace只会把第一个回车变成<br>
// string = string.replace(/\n/g, "<br>") //用正则表达式把所有的回车变成br
// demo.innerHTML = string[n]
// demo.innerHTML = string.substring(0, n)
// console.log(n)
let step = () => {
    setTimeout(() => {
        //如果是回车，就不照搬
        //如果不是回车，就照搬
        if(string[n] === '\n') {
            string2 += "<br>"
        } else if(string[n] === ' ') {
            string2 += "&nbsp;"
        } else {
            string2 += string[n]
        }       
        // string2 += string[n] === '\n' ? '<br>' : string[n]
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        //如果n不是最后一个，就继续
        if (n < string.length - 1) {
            n += 1
            step()
        }
        // demo.innerHTML = string[n]
        // demo.innerHTML = string.substring(0, n)

        // console.log('string2',string2)
        // console.log(n)
        // if (n >= string.length) {
        //     return
        // } else {
        //     step()
        // }

        // if(n <= string.length) {
        //     step()
        // } else {

        // }

    }, 50)
}
// setInterval(() => {
//     n = n + 1
//     demo.innerHTML = n
//     step()
// }, 1000)

step()

// style.innerHTML = `
// body{
//     color: red;
// }
// `