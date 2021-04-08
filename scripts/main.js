/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Connor Peper
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.PictureTaker = class {
	constructor() {
        let pictures = document.querySelectorAll("img");
        console.log(this.pictures);
        for (let images of pictures) {
			    images.onclick = (event) => {
                console.log("Picture being pressed: " + images.id);
				// const buttonIndex = parseInt(lightButton.dataset.buttonIndex);
				this.changeImage(images);
				// this.updateView();
			};
		}

	}

	changeImage(image) {
        console.log("Image Sent Over: " + image.id);
        console.log("Image url: " + image.src);
        console.log("Image alt: " + image.alt);

        image.dataset.imgIndex++;
        if (image.id =="me") {
            console.log("Picture of me");
            image.src= "images/Connor_Peper_" + image.dataset.imgIndex + ".jpg";
        } else if (image.id == "arcadeProject") {
            image.src = "images/portfolio/portfolio_arcade_"+ image.dataset.imgIndex + ".PNG";
        } else if (image.id == "skyrimProject") {
            image.src = "images/portfolio/portfolio_skyrim_" + image.dataset.imgIndex + ".PNG";
        } else if (image.id == "portfolioProject") {
            image.src = "images/portfolio/portfolio_portfolio_" + image.dataset.imgIndex + ".PNG";
        } else {
            console.log("Not any tag");
        }
	}

    updateView() {


    }
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    let PictureTaker = new this.PictureTaker();
};

onError = function() {
    console.log("Error");

}

rhit.main();
