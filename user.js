function user(){
  //coords
  this.x = w/2
  this.y = h/2
  //dimensions
  this.width = 50
  this.height = 50
  //show
  this.show = function(){
    imageMode(CENTER)
    image(skeletonRLeg,this.x+10,this.y+75)
    image(skeletonLLeg,this.x-15,this.y+75)
    image(skeletonRShoulder,this.x+13,this.y+45)
    image(skeletonOffHand,this.x+18,this.y+62)
    image(skeletonTorso,this.x-5,this.y+50)
    image(skeletonLShoulder,this.x-20,this.y+45)
    image(skeletonSwordHand,this.x-15,this.y+60)
    image(skeletonHead,this.x,this.y)
  }
  //y velocity
  this.yvelocity = 0
  //x velocity 
  this.xvelocity = 0
  //move up and down
  this.moveud = function(pon){ //pon = neg --> up; pon = pos --> down 
    this.yvelocity = 5*pon
  }
  //move side to side
  this.movelr = function(pon){ //pon = neg --> left; pon = pos --> right
    this.xvelocity = 5*pon
  }
  this.moving
  //update
  this.update = function(){
    this.x += this.xvelocity
    this.y += this.yvelocity
    if(this.xvelocity != 0 || this.yvelocity != 0){
      this.moving = true
    }else{
      this.moving = false
    }
    if(this.moving === true){
      //move limbs
    }
    if(this.x < 50){
      this.x = 50
    }
    if(this.x > w-60){
      this.x = w-60
    }
    if(this.y < 50){
      this.y = 50
    }
    if(this.y > h-90){
      this.y = h-90
    }
  }
}