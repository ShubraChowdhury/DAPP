const StarNotary = artifacts.require("StarNotary");

var accounts;
var owner;

contract('StarNotary', (accs) => {
    accounts = accs;
    owner = accounts[0];
});

it('can Create a Star', async() => {
    let tokenId = 1;
    let instance = await StarNotary.deployed();
    console.log(" Account 0 ="+accounts[0]);
    await instance.createStar('Awesome Star!', tokenId, {from: accounts[0]})
    assert.equal(await instance.tokenIdToStarInfo.call(tokenId), 'Awesome Star!')
});

it('lets user1 put up their star for sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let starId = 2;
    let starPrice = web3.utils.toWei(".01", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    assert.equal(await instance.starsForSale.call(starId), starPrice);
});

it('lets user1 get the funds after the sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 3;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user1);
    await instance.buyStar(starId, {from: user2, value: balance});
    let balanceOfUser1AfterTransaction = await web3.eth.getBalance(user1);
    let value1 = Number(balanceOfUser1BeforeTransaction) + Number(starPrice);
    let value2 = Number(balanceOfUser1AfterTransaction);
    assert.equal(value1, value2);
});

it('lets user2 buy a star, if it is put up for sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 4;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user2);
    await instance.buyStar(starId, {from: user2, value: balance});
    assert.equal(await instance.ownerOf.call(starId), user2);
});

it('lets user2 buy a star and decreases its balance in ether', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 5;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user2);
    const balanceOfUser2BeforeTransaction = await web3.eth.getBalance(user2);
    await instance.buyStar(starId, {from: user2, value: balance, gasPrice:0});
    const balanceAfterUser2BuysStar = await web3.eth.getBalance(user2);
    let value = Number(balanceOfUser2BeforeTransaction) - Number(balanceAfterUser2BuysStar);
    assert.equal(value, starPrice);
});

// Implement Task 2 Add supporting unit tests

it('can add the star name and star symbol properly', async() => {
    // 1. create a Star with different tokenId
    //2. Call the name and symbol properties in your Smart Contract and compare with the name and symbol provided
    //string public constant name = "Shubra West Star";
	//string public constant symbol = "SHUBW";


	let instance = await StarNotary.deployed();
	let name = await instance.name();
    let symbol = await instance.symbol();

    assert.equal(name, "Shubra West Star");
    assert.equal(symbol, "SHUBW");
});



it('lets 2 users exchange stars', async() => {
    // 1. create 2 Stars with different tokenId
    let instance = await StarNotary.deployed();
	let user_N44 = accounts[1];
    let user_S55 = accounts[2];
    // function exchangeStars(uint256 _tokenId1, uint256 _tokenId2) public {
    // 2. Call the exchangeStars functions implemented in the Smart Contract
    let starId_44 = 44;
	let starId_55 = 55;
	await instance.createStar('Shubra Star North 44', starId_44, {from: user_N44});
    await instance.createStar('Shubra Star North 55', starId_55, {from: user_S55});

	await instance.approve(user_S55, starId_44, {from: user_N44});
    await instance.approve(user_N44, starId_55, {from: user_S55});


    await instance.exchangeStars(starId_44, starId_55, {from: user_N44});


    // 3. Verify that the owners changed


    assert.equal(await instance.ownerOf.call(starId_44), user_S55);
    assert.equal(await instance.ownerOf.call(starId_55), user_N44);





});

it('lets a user transfer a star', async() => {
    // 1. create a Star with different tokenId

    let instance = await StarNotary.deployed();
	let user_N33 = accounts[1];
	let user_S66 = accounts[2];
	let starId_33 = 33;
	await instance.createStar('SHUBRA START EAST 33', starId_33, { from: user_N33 })

    // 2. use the transferStar function implemented in the Smart Contract

    await instance.transferStar(user_S66, starId_33, { from: user_N33 })
    // 3. Verify the star owner changed.
    assert.equal(await instance.ownerOf.call(starId_33), user_S66);

});




it('lookUptokenIdToStarInfo test', async() => {
    // 1. create a Star with different tokenId
    const instance = await StarNotary.deployed()
	const user_LKP = accounts[1]
	console.log("Look Up Account :"+ user_LKP);
	const starId_LKP = 77

	await instance.createStar('SHUBRA START EAST LKP', starId_LKP, { from: user_LKP })

    // 2. Call your method lookUptokenIdToStarInfo

    assert.equal(await instance.lookUptokenIdToStarInfo.call(starId), starName)

    // 3. Verify if you Star name is the same

	assert.equal(await instance.ownerOf.call(starId_LKP), user_LKP);

});