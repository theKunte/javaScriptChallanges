function stringManipulation(blogTitle){
    const punctioation =/[.,/#!$%^&*;:{}=!\`'~()'"]/g;
    
    const blogTitleWithoutPunctuation = blogTitle.replace(punctioation,"");
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ","-");
}

console.log(stringManipulation("How I got my new Job!!!!"));
console.log(stringManipulation("I've gone a long way, but I made it!"));