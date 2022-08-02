const booksData = {
    "TheMidnightLibrary" : "Nora Seed feels stuck in her life, bound to the choices she made that she still isn't sure were right. When Nora is ready to leave it all behind, she finds herself in a peculiar library, where each of the infinite books offers a portal to a parallel world, showing her all the many ways her life could have been slightly or drastically different, had she made other decisions.",
    "TheInvisibleLifeOfAddieLaRue" : "'The Invisible Life of Addie LaRue' is a genre-bending fantasy book about a young woman named Addie who, in 1714, makes a bargain with a dark god and becomes cursed to be forgotten by everyone she meets. Addie's story spans three centuries and countless countries — until she meets a boy in New York City in 2014 who can finally remember her.",
    "TheSevenHusbandsOfEvelynHugo" : "Evelyn Hugo was an iconic Hollywood actress, just as notoriously remembered for her seven marriages as she was for her movie performances. Finally ready to tell her story, Evelyn Hugo chooses a little-known journalist named Monique, who goes to Evelyn's luxurious apartment to hear the truth behind Evelyn's lifetime of friendships, ambitions, and many loves.",
    "ToKillAMockingbird" : "Considered one of the greatest novels of all time, 'To Kill a Mockingbird' is an unforgettable historical fiction novel from 1960 that follows young Jean Louise Finch during a time of great racial inequality in her community. Her father, Atticus Finch, is a lawyer defending a Black man wrongly accused of a terrible crime as he faces a community desperate for a guilty conviction."
}


function allBooks(req, res, next){
    console.log('Fetching all books');
    next();
}

function books(req,res){
    return res.status(200).send(booksData);
}

function book(req,res){
    const bookId = req.params.name;
    if(booksData[bookId]){
        
        return res.status(200).send({[bookId] : booksData[bookId]});
    }
    return res.status(404).send('Book not found');
}

module.exports = {
    allBooks,
    books,
    book
}