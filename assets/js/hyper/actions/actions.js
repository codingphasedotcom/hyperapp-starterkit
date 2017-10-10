export const actions = {
  up,
  intro,
  showMenu
}

function up (state, actions) {
  return (
    {count: state.count + 1}
  )
}

function showMenu(){
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}
