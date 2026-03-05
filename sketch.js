// Get effective mouse position (either actual mouse or tilt-based on mobile)
function getEffectiveMousePos() {
  if (window.isMobileDevice && window.tiltOffsetX !== undefined) {
    return {
      x: width / 2 + window.tiltOffsetX,
      y: height / 2 + window.tiltOffsetY
    };
  }
  return { x: mouseX, y: mouseY };
}

class axolotl{
    constructor(x, y){
      this.x = x
      this.y = y
    }
  
    // function used to construct the face, primarily by changing colors to create differences.
    // parameter is an array containing RGB information
    face(_clr){
      noStroke()
      fill(_clr[0], _clr[1], _clr[2])
      rect(this.x-100, this.y-100, 200, 200, 78, 78, 50, 50)
    }
    
    // function used to construct the gill section, primarily by changing shapes and colors to create differences
    gill(gill_type, _clr1, _clr2, face_clr){
      noStroke()
      fill(_clr1[0],_clr1[1],_clr1[2])
      let effectivePos = getEffectiveMousePos();
      var slight_Xm = map(effectivePos.x - this.x, -width/2, width/2, -5, 5, true)
      var slight_Ym = map(effectivePos.y - this.y, -height/2, height/2, -5, 5, true)
      if (gill_type%7 == 0){
        // 1st type of gill
        // >(0_0)<
        beginShape()
        vertex(this.x-80, this.y)
        vertex(this.x-120 + slight_Xm, this.y-40 + 1.6*slight_Ym)
        vertex(this.x-140 + slight_Xm, this.y-20 + slight_Ym)
        vertex(this.x-120, this.y + slight_Ym)
        vertex(this.x-140 + slight_Xm, this.y+20 + slight_Ym)
        vertex(this.x-120 + slight_Xm, this.y+40 + 1.6*slight_Ym)
        endShape()
        beginShape()
        vertex(this.x+80, this.y)
        vertex(this.x+120 + slight_Xm, this.y-40 + 1.6*slight_Ym)
        vertex(this.x+140 + slight_Xm, this.y-20 + slight_Ym)
        vertex(this.x+120, this.y + slight_Ym)
        vertex(this.x+140 + slight_Xm, this.y+20 + slight_Ym)
        vertex(this.x+120 + slight_Xm, this.y+40 + 1.6*slight_Ym)
        endShape()
      }
      else if(gill_type%7 == 1){
        // 2nd type of gill
        // =(0_0)=
        quad(this.x-168 + slight_Xm, this.y-30, this.x+168 - slight_Xm, this.y-30, this.x+152 - slight_Xm, this.y-10, this.x-152 + slight_Xm, this.y-10)
        quad(this.x-150 - slight_Xm, this.y+28, this.x+150 + slight_Xm, this.y+28, this.x+166 + slight_Xm, this.y+10, this.x-166 - slight_Xm, this.y+10)
        fill(_clr2[0],_clr2[1],_clr2[2])
        quad(this.x-140 - slight_Xm, this.y-9, this.x+140 + slight_Xm, this.y-9, this.x+124 + slight_Xm, this.y+9, this.x-124 - slight_Xm, this.y+9)
      }
      else if(gill_type%7 == 2){
        // 3rd type of gill
        // >>-(0_0)-<<
        push()
        translate(this.x, this.y)
        var angle1 = map(mouseY, -height/2, height/2, -2*PI/10, PI/10, true)
        rotate(angle1)
        stroke(_clr1[0],_clr1[1],_clr1[2])
        strokeWeight(19)
        line(-200, 0, 0, 0)
        noStroke()
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(-110, 0, -170, -50, -170, 50)
        fill(_clr2[0],_clr2[1],_clr2[2])
        triangle(-140, 0, -190, -40, -190, 40)
        fill(face_clr[0],face_clr[1],face_clr[2])
        quad(-160, 0, -190, -18, -220, 0, -190, 18)
        pop()
  
        push()
        translate(this.x, this.y)
        var angle2 = map(mouseY, -height/2, height/2, 2*PI/10, -PI/10, true)
        rotate(angle2)
        stroke(_clr1[0],_clr1[1],_clr1[2])
        strokeWeight(19)
        line(200, 0, 0, 0)
        noStroke()
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(110, 0, 170, -50, 170, 50)
        fill(_clr2[0],_clr2[1],_clr2[2])
        triangle(140, 0, 190, -40, 190, 40)
        fill(face_clr[0],face_clr[1],face_clr[2])
        quad(160, 0, 190, -18, 220, 0, 190, 18)
        pop()
      }
      else if(gill_type%7 == 3){
        // 4th type of gill
        // ((0_0))
        ellipse(this.x+80, this.y+slight_Ym, 120+2*slight_Xm)
        ellipse(this.x-80, this.y+slight_Ym, 120+2*slight_Xm)
        stroke(face_clr[0],face_clr[1],face_clr[2])
        strokeWeight(5)
        push()
        translate(this.x, this.y)
        rotate(PI/20)
        line(115, slight_Ym, -116, slight_Ym)
        rotate(-2*PI/20)
        line(115, slight_Ym, -116, slight_Ym)
        pop()
        line(119+this.x, this.y+slight_Ym, -119+this.x, this.y+slight_Ym)
      }
      else if(gill_type%7 == 4){
        // 5th type of gill
        // \(0_0)/
        push()
        translate(this.x, this.y)
        rotate(PI/15)
        triangle(-180 + slight_Xm, -50 + slight_Ym, -10, -50, -10, 0)
        fill(_clr2[0],_clr2[1],_clr2[2])
        triangle(-200 + slight_Xm, 0 + slight_Ym, -10, -25, -10, 25)
        fill(_clr2[0],_clr2[1],_clr2[2])
        fill(face_clr[0],face_clr[1],face_clr[2])
        triangle(-160 + slight_Xm, 50 + slight_Ym, -10, 50, -10, 0)
  
        rotate(-2*PI/15)
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(180 + slight_Xm, -50 + slight_Ym, 10, -50, 10, 0)
        fill(_clr2[0],_clr2[1],_clr2[2])
        triangle(200 + slight_Xm, 0 + slight_Ym, 10, -25, 10, 25)
        fill(face_clr[0],face_clr[1],face_clr[2])
        triangle(160 + slight_Xm, 50 + slight_Ym, 10, 50, 10, 0)
        pop()
      }
      else if(gill_type%7 == 5){
        // 6th type of gill
        // *(0_0)*
        push()
        translate(this.x, this.y)
        fill(random(110, 210),random(110, 210),random(110, 210))
        triangle(0, 0, -190 + slight_Xm, -45+ slight_Ym, -170+ slight_Xm, -80)
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(0, 0, -200 + slight_Xm, -20+ slight_Ym, -200+ slight_Xm, 20)
        fill(random(110, 210),random(110, 210),random(110, 210))
        triangle(0, 0, -190 + slight_Xm, 40+ slight_Ym, -170+ slight_Xm, 70)
  
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(0, 0, 190 + slight_Xm, -45+ slight_Ym, 170+ slight_Xm, -80)
        fill(random(110, 210),random(110, 210),random(110, 210))
        triangle(0, 0, 200 + slight_Xm, -20+ slight_Ym, 200+ slight_Xm, 20)
        fill(_clr1[0],_clr1[1],_clr1[2])
        triangle(0, 0, 190 + slight_Xm, 40+ slight_Ym, 170+ slight_Xm, 70)
        pop()
      }
      else if(gill_type%7 == 6){
        // 7th type of gill
        // 3(0_0)3
        push()
        translate(this.x, this.y)
        beginShape()
        vertex(-80, -70)
        bezierVertex(-100, -120, -220+ slight_Xm, -120, -150 + slight_Xm, -40+slight_Ym)
        bezierVertex(-200, -30, -150+ slight_Xm, 70, -80, 80);
        endShape(CLOSE)
        vertex(80, -70)
        bezierVertex(100, -120, 220+ slight_Xm, -120, 150 + slight_Xm, -40+slight_Ym)
        bezierVertex(200, -30, 150+ slight_Xm, 70, 80, 80);
        endShape(CLOSE)
        fill(_clr2[0],_clr2[1],_clr2[2])
        rotate(-PI/5)
        ellipse(-90, -40, 50+slight_Ym, 80+slight_Xm)
        ellipse(-50, -90, 60+slight_Ym, 90+slight_Xm)
        rotate(2*PI/5)
        ellipse(90, -40, 50+slight_Ym, 80+slight_Xm)
        ellipse(50, -90, 60+slight_Ym, 90+slight_Xm)
        pop()
      }
    }
    
    // function used to construct the eyes section, primarily by changing shapes and colors to create differences
    eyes(eyes_type, _clr, face_clr){
      noStroke()
      let effectivePos = getEffectiveMousePos();
      var slight_Xm = map(effectivePos.x - this.x, -width/2, width/2, -5, 5, true)
      var slight_Ym = map(effectivePos.y - this.y, -height/2, height/2, -5, 5, true)
      var toEyeDist = dist(effectivePos.x, effectivePos.y, this.x, this.y)
      // *Use this variable to calculate the highlight size in the eyes
      var highlight = min(dist(effectivePos.x, effectivePos.y, width, 0), dist(effectivePos.x, effectivePos.y, 0, height), dist(effectivePos.x, effectivePos.y, 0, 0), dist(effectivePos.x, effectivePos.y, height, width))
      
      if(eyes_type%7 == 0){
        // 1st type of eyes
        // Peaceful eyes
        // (Θ Θ)
        push()
        translate(this.x, this.y)
        fill("white")
        circle(-30, -20, 60)
        circle(30, -20, 60)
        fill(_clr[0], _clr[1], _clr[2])
        rect(-46+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
        rect(10+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
        pop()
      }
      else if(eyes_type%7 == 1){
        // 2nd type of eyes
        // Cat eyes
        // (0 0)
        push()
        translate(this.x, this.y)
        fill("white")
        circle(-30, -20, 60)
        circle(30, -20, 60)
        fill(_clr[0], _clr[1], _clr[2])
        ellipse(-28+slight_Xm, -20+slight_Ym, 40 -toEyeDist/20, 40)
        ellipse(28+slight_Xm, -20+slight_Ym, 40 -toEyeDist/20, 40)    
        fill("white")
        ellipse(-30+slight_Xm, -25+slight_Ym, highlight/30)
        ellipse(30+slight_Xm, -25+slight_Ym, highlight/30)
        pop()
      }
      else if(eyes_type%7 == 2){
        // 3rd type of eyes
        // Big eyes
        // (D D)
        push()
        translate(this.x, this.y)
        fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
        rect(-76+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 100, 15, 10, 10)
        rect(9+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 15, 100, 10, 10)
        fill("white")
        rect(-65+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 100, 15, 10, 10)
        rect(9+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 15, 100, 10, 10)
        fill(_clr[0], _clr[1], _clr[2])
        rect(-45+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
        rect(25+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
        fill("white")
        ellipse(-35+slight_Xm, -35+slight_Ym, 10)
        ellipse(35+slight_Xm, -35+slight_Ym, 10)
        pop()
      }
      else if(eyes_type%7 == 3){
        // 4th type of eyes
        // Cynical eyes
        // (￢ ￢)
        push()
        translate(this.x, this.y)
        stroke(face_clr[0],face_clr[1],face_clr[2])
        strokeWeight(3)
        fill("white")
        ellipse(-35, -40, 85, 60)
        ellipse(35, -40, 85, 60)
        noStroke()
        fill(_clr[0], _clr[1], _clr[2])
        rect(-50+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
        rect(20+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
        noStroke()
        fill(face_clr[0],face_clr[1],face_clr[2])
        rect(-82, -72, 165, 30, 10, 10, 0, 0)
        pop()
      }
      else if(eyes_type%7 == 4){
        // 5th type of eyes
        // Cyclops
        // ( ◕ )
        push()
        translate(this.x, this.y)
        fill("white")
        ellipse(0, -30, 100)
        fill(_clr[0], _clr[1], _clr[2])
        ellipse(0+slight_Xm, -20+slight_Ym, 60)
        fill("white")
        ellipse(10+slight_Xm, -30+slight_Ym, 30-toEyeDist/30)
        fill(face_clr[0],face_clr[1],face_clr[2])
        ellipse(-20, -70, 60)
        pop()
      }
      else if(eyes_type%7 == 5){
        // 6th type of eyes
        // Eyes behind glasses
        // (@-@)
        push()
        translate(this.x, this.y)
        fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
        ellipse(-35, -40, 85, 60)
        ellipse(35, -40, 85, 60)
        fill(_clr[0]+toEyeDist/10, _clr[1]+toEyeDist/10, _clr[2]+toEyeDist/10)
        rect(-50+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
        rect(20+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
        // Glasses
        fill(_clr[0], _clr[1], _clr[2])
        ellipse(-40-slight_Xm, -30-toEyeDist/10, 80)
        ellipse(40-slight_Xm, -30-toEyeDist/10, 80)
        fill(face_clr[0]+60,face_clr[1]+60,face_clr[2]+60)
        ellipse(-40-slight_Xm, -30-toEyeDist/10, 60)
        ellipse(40-slight_Xm, -30-toEyeDist/10, 60)
        fill("#FBFBFB")
        rect(-60-slight_Xm, -45-toEyeDist/10, 5, 20)
        rect(20-slight_Xm, -45-toEyeDist/10, 5, 20)
        rect(-60-slight_Xm, -20-toEyeDist/10, 5, 5)
        rect(20-slight_Xm, -20-toEyeDist/10, 5, 5)
        pop()
      }
      else if(eyes_type%7 == 6){
        // 7th type of eyes
        // Electronic eyes
        // ([''])
        push()
        translate(this.x, this.y)
        for(var i = 0; i < 30; i+= 1){
          for(var j = 0; j < 14; j+= 1){
            fill(random(150, 230), random(150, 230), random(150, 230))
            rect(-75+i*5, -55+j*5, 5, 5)
          }
        }
        fill(_clr[0], _clr[1], _clr[2])
        
        if(toEyeDist < 30){
          // X
          rect(-55+slight_Xm, -50, 10, 10)
          rect(-50+slight_Xm, -50, 10, 10)
          rect(-45+slight_Xm, -40, 10, 10)
          rect(-40+slight_Xm, -30, 10, 10)
          rect(-30+slight_Xm, -20, 10, 10)
          rect(-25+slight_Xm, -10, 10, 10)
          rect(-20+slight_Xm, 0, 10, 10)
          rect(-15+slight_Xm, 0, 10, 10)
  
          rect(-15+slight_Xm, -50, 10, 10)
          rect(-20+slight_Xm, -50, 10, 10)
          rect(-25+slight_Xm, -40, 10, 10)
          rect(-30+slight_Xm, -30, 10, 10)
          rect(-40+slight_Xm, -20, 10, 10)
          rect(-45+slight_Xm, -10, 10, 10)
          rect(-50+slight_Xm, 0, 10, 10)
          rect(-55+slight_Xm, 0, 10, 10)
  
          // O
          fill(_clr[0]+20, _clr[1]+20, _clr[2]+20)
          rect(15+slight_Xm, -50, 10, 10)
          rect(25+slight_Xm, -50, 10, 10)
          rect(35+slight_Xm, -50, 10, 10)
          rect(15+slight_Xm, 0, 10, 10)
          rect(25+slight_Xm, 0, 10, 10)
          rect(35+slight_Xm, 0, 10, 10)
          rect(5+slight_Xm, -40, 10, 10)
          rect(5+slight_Xm, -30, 10, 10)
          rect(5+slight_Xm, -20, 10, 10)
          rect(5+slight_Xm, -10, 10, 10)
          rect(45+slight_Xm, -40, 10, 10)
          rect(45+slight_Xm, -30, 10, 10)
          rect(45+slight_Xm, -20, 10, 10)
          rect(45+slight_Xm, -10, 10, 10)
        }
        else{
          // Eyebrows
          rect(-60+slight_Xm, -45+slight_Ym, 10, 10)
          rect(-50+slight_Xm, -50+slight_Ym, 20, 10)
          rect(30+slight_Xm, -50+slight_Ym, 20, 10)
          rect(50+slight_Xm, -45+slight_Ym, 10, 10)
          // Eyes
          fill("white")
          rect(-40+slight_Xm, -30+slight_Ym, 10, 30)
          rect(30+slight_Xm, -30+slight_Ym, 10, 30)
        }
        fill(face_clr[0]-20,face_clr[1]-20,face_clr[2]-20)
        ellipse(-73, -20, 40, 75)
        ellipse(73, -20, 40, 75)
        fill(face_clr[0],face_clr[1],face_clr[2])
        ellipse(-76, -20, 38, 80)
        ellipse(76, -20, 38, 80)
        pop()
      }
    }
    
    // function used to construct the mouth section, primarily by changing shapes and colors to create differences
    mouth(mouth_type, _clr, face_clr){
      noStroke()
      fill(_clr[0], _clr[1], _clr[2])
      let effectivePos = getEffectiveMousePos();
      var slight_Xm = map(effectivePos.x - this.x, -width/2, width/2, -5, 5, true)
      var slight_Ym = map(effectivePos.y - this.y, -height/2, height/2, -5, 5, true)
      var toEyeDist = dist(mouseX, mouseY, this.x, this.y)
      if(mouth_type%7 == 0){
        push()
        translate(this.x, this.y)
        rect(-40, 40, 80, 40, 10)
        fill(face_clr[0]+20,face_clr[1]+20,face_clr[2]+20)
        ellipse(0, 37+slight_Ym, 80, 42)
        fill(face_clr[0],face_clr[1],face_clr[2])
        ellipse(0, 40+slight_Ym, 90, 40)
        stroke(_clr[0], _clr[1], _clr[2])
        strokeWeight(4)
        line(-9, 40+slight_Ym, -7+toEyeDist/300, 42+slight_Ym)
        line(9, 40+slight_Ym, 7-toEyeDist/300 , 42+slight_Ym)
        pop()
      }
      else if(mouth_type%7 == 1){
        push()
        translate(this.x, this.y)
        ellipse(30, 50+slight_Ym, 86, 50)
        ellipse(-30, 50+slight_Ym, 86, 50)
        fill(face_clr[0],face_clr[1],face_clr[2])
        rect(-80, 60, 160, 30)
        pop()
      }
      else if(mouth_type%7 == 2){
        push()
        translate(this.x, this.y)
        stroke(_clr[0], _clr[1], _clr[2])
        strokeWeight(4)
        line(-10, 50+slight_Ym, -6+toEyeDist/300, 53+slight_Ym)
        line(10, 50+slight_Ym, 6-toEyeDist/300 , 53+slight_Ym)
        strokeWeight(8)
        line(-60, 65+slight_Ym/2, 60, 65+slight_Ym/2)
        pop()
      }
      else if(mouth_type%7 == 3){
        noFill();
        stroke(_clr[0], _clr[1], _clr[2])
        strokeWeight(4)
        line(this.x-9, this.y+40+slight_Ym, this.x-7+toEyeDist/300, this.y+42+slight_Ym)
        line(this.x+9, this.y+40+slight_Ym, this.x+7-toEyeDist/300 , this.y+42+slight_Ym)
        stroke(_clr[0], _clr[1], _clr[2]);
        strokeWeight(8)
        arc(this.x, this.y+20, 130+slight_Xm, 110+slight_Ym, radians(25), radians(140), OPEN)
      }
      else if(mouth_type%7 == 4){
        push()
        translate(this.x, this.y)
        quad(0, 20+slight_Ym, -50-slight_Xm, 40, 0, 60+slight_Ym, 50-slight_Xm, 40)
        fill(_clr[0]+12, _clr[1]+14, _clr[2]+16)
        quad(0, 55+slight_Ym, -50-slight_Xm, 40, 0, 60+slight_Ym, 50-slight_Xm, 40)
        stroke(face_clr[0],face_clr[1],face_clr[2])
        strokeWeight(4)
        line(-10, 24+slight_Ym, -10+toEyeDist/300, 27+slight_Ym)
        line(10, 24+slight_Ym, 10-toEyeDist/300 , 27+slight_Ym)
        pop()
      }
      else if(mouth_type%7 == 5){
        push()
        translate(this.x, this.y)
        fill(_clr[0]+15,_clr[1]+10,_clr[2]+10)
        ellipse(0, 60+slight_Ym, 45, 20-toEyeDist/50)
        fill(_clr[0],_clr[1],_clr[2])
        ellipse(18, 40+slight_Ym, 45, 50)
        ellipse(-18, 40+slight_Ym, 45, 50)
        fill(face_clr[0],face_clr[1],face_clr[2])
        ellipse(18, 32+slight_Ym, 50, 50)
        ellipse(-18, 32+slight_Ym, 50, 50)
        stroke(_clr[0], _clr[1], _clr[2])
        strokeWeight(4)
        line(-10, 30+slight_Ym, -6+toEyeDist/300, 33+slight_Ym)
        line(10, 30+slight_Ym, 6-toEyeDist/300 , 33+slight_Ym)
        pop()
      }
      else if(mouth_type%7 == 6){
        push()
        translate(this.x, this.y)
        rect(-60+slight_Xm, 40+slight_Ym, 120, 20, 5)
        stroke(_clr[0]-10, _clr[1]-10, _clr[2]-10)
        strokeWeight(9-toEyeDist/100)
        line(-48+slight_Xm, 50+slight_Ym/2, 48+slight_Xm, 50+slight_Ym/2)
        pop()
      }
    }
    
  }
  
  function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    let canvas = createCanvas(w, h);
    // Move canvas into the container
    canvas.parent('p5-container');
    frameRate(60);
    textFont('Bagel Fat One')
    
    // Generate random axolotl on first load
    randomizeAxolotl();
  }
  
  function randomizeAxolotl() {
    face_clr[0] = random(110, 210)
    face_clr[1] = random(110, 210)
    face_clr[2] = random(110, 210)
    gill_clr1[0] = random(110, 210)
    gill_clr1[1] = random(110, 210)
    gill_clr1[2] = random(110, 210)
    gill_clr2[0] = random(110, 210)
    gill_clr2[1] = random(110, 210)
    gill_clr2[2] = random(110, 210)
    gill_type = int(random()*100)
    eyes_type = int(random()*100)
    eyes_clr[0] = random(60, 200)
    eyes_clr[1] = random(60, 200)
    eyes_clr[2] = random(60, 200)
    mouth_type = int(random()*100)
    mouth_clr[0] = random(110, 210)
    mouth_clr[1] = random(110, 210)
    mouth_clr[2] = random(110, 210)
  }
  
  function windowResized() {
    const container = document.getElementById('p5-container');
    if (container && container.offsetWidth > 0) {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      resizeCanvas(w, h);
    }
  }
  
  // Initialize the basic color variable arraies
  var face_clr = [100, 100, 100]
  var gill_type = 100
  var gill_clr1 = [150, 150, 150]
  var gill_clr2 = [150, 200, 200]
  var eyes_type = 100
  var eyes_clr = [50, 50, 50]
  var mouth_type = 100
  var mouth_clr = [150, 150, 150]
  
  function draw() {
    // Build the background using a halo effect and the face color
    background(158)
    blendMode(MULTIPLY) // MULTIPLY - multiply the colors, result will always be darker
    var bg_clr1 = color(face_clr[0], face_clr[1], face_clr[2])
    noStroke()
    for(var i = 0; i < width*2; i+= 56){
        bg_clr1.setAlpha(36)
        fill(bg_clr1)
        ellipse(width/2,height/2, i+mouseX)
    }
    
    
    blendMode(BLEND) // BLEND - linear interpolation of colours: C = A*factor + B. This is the default blending mode
    var a = new axolotl(width/2, (height/2) + 30)  // Offset down to account for header
    // Click to switch to another axolotl
    // Change the values of key parameters using "random," and perform the switching through function calls within the axolotl class
    if (mouseIsPressed == true){
      randomizeAxolotl()
    }
    noStroke()
    // Call functions to draw the axolotl
    a.gill(gill_type, gill_clr1, gill_clr2, face_clr)
    a.face(face_clr)
    a.mouth(mouth_type, mouth_clr, face_clr)
    a.eyes(eyes_type, eyes_clr, face_clr)
    
    // Draw header bar at the top
    blendMode(BLEND)
    fill(0, 0, 0, 5)  // Dark overlay with opacity
    rect(0, 0, width, 100)
    
    // Draw header text
    fill(255, 255, 255, 230)  // White text
    textAlign(CENTER, CENTER)
    textSize(30)
    text('An Axolotl, for Chana', width / 2, 50)
  }
