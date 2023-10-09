function bouncingBall(h,  bounce,  window) {
  let bounces = 0
  if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
    let initialH = h

    while (h > window) {
      h = h * (1 + bounce - 1)
      bounces += 2
    }

    return bounces - 1
  } 
  
  else {
    return - 1
  }
}

console.log(bouncingBall(30.0, 0.66, 1.5)) 