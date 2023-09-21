export class Pokemon {
    constructor(id, image, name, weight, height) {
        this.id = id
        this.image = image
        this.name = name
        this.weight = weight
        this.height = height
    }

    display(){
        let details = `<img src="${this.image}"></img>
                       <h5>${this.name}</h5>
                       <p>weight: ${this.weight}lb</p>
                       <p>height: ${this.height}ft</p>`;
        document.getElementById('details').innerHTML = details;
        return details;
    }
}

