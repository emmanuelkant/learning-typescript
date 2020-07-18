// boolean (true/ false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['foo', "bar"]

let values: Array<number>
values = [1, 2, 3]

//tuple
let title: [number, string, string]
title: [1, 'foo', 'bar']

// enum
enum Color {
  white = '#fff',
  black = '#000' 
}

// any (Anything) It is not cool
let thing: any
thing = 2

// void (empty) 
function logger(): void {
  console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('Error')
}

// object
let cart: object
cart = {
  key: 'fi'
}

// type inference
let message2 = 'defined message'
message2 = 'new string'

window.addEventListener('click', (e) => {
  console.log(e.target)
  console.log(e.foo) /* does not exist foo in MouseEvent */
})


