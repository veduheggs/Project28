class Sling {
    constructor(a, b) {
        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.01,
            length:10
        }
    this.sling=Constraint.create(options)   
    World.add(world,this.sling) 
    }
    display(){
        var posA=this.sling.bodyA.position
        var posB=this.sling.pointB
        push()
        strokeWeight(10)
        stroke("white")
        fill("white")
        line(posA.x,posA.y,posB.x,posB.y)
        console.log(this.sling)
        pop()
    }
}