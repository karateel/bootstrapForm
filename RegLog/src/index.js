import './styles/index.scss'
import $ from 'jquery'
import 'bootstrap'
import startPage from './index.html'
import login from './html/login.html'
import register from './html/register.html'
import loader from './html/loader.html'
import impro from './html/improvizaciya.html'

$('.container').html(startPage)


$('#agreeBtn').on('click', (e) => {
    setTimeout( () => {
        alert('имитация загрузки...')
        $('.container').html(login)
    },3000)
    $('.container').html(loader)
    e.preventDefault()
})

$('#disAgreeBtn').on('click', (e) => {
    setTimeout(() => {
        alert('и тут имитация загрузки')
        $('.container').html(register)
    },3000)
    $('.container').html(impro)
    e.preventDefault()
})

$('#loginForm').on('click', (e) => {
    $('.')
})
