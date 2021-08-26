import Post from './Post'
import './styles/style.css'
import json from './assets/json.json'
import Logo from './assets/test.png'
import xml from './assets/data.xml'

const post = new Post('Title Test', Logo)

console.log('Post to String:', post.toString());

console.log('JSON', json)
console.log('XML', xml)