function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  let timeArr = time.split(":")
  let hr = Math.floor(minutesToAdd/60)
  let minutos = minutesToAdd%60

  minutos = minutos + parseInt(timeArr[1])
  hr = hr + parseInt(timeArr[0])

  if(minutos>=60){ hr= hr+1; minutos=minutos-60}
  if(hr>12){ hr = hr-12}

  minutos= (minutos+"").length<2?"0"+minutos:minutos+""
  hr = (hr+"").length<2?"0"+hr:hr+""
  let result = [hr,minutos].join(":")

  return result
}

module.exports = clockMinuteAdder
