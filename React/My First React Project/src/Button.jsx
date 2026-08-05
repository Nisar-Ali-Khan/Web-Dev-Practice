function printHello() {
  console.log('Hello')
}

function Button() {
  return <button onClick={printHello}>Click me</button>
}

export default Button
