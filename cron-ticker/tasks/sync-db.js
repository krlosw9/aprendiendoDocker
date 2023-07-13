let times = 0;
const syncDB = () =>{
  times++;
  console.log('Tick multipo de 5 segundos: ',times);

  return times;
}

module.exports = {
  syncDB
}