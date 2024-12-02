const input = document.getElementById('select')
const submit = document.getElementById('sub')
const list = document.getElementById('list')

submit.addEventListener('click', () => {
  const ulitem = document.createElement('li')
  ulitem.innerHTML = input.value
  list.append(ulitem)
  input.value = ''
})
