const functions = require ('./functions');

test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//tiBeFalsy matches anything that an if statement treas as false


//toBeNull
test('should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test('User should be Ronny Nijimbere object', () => {
	expect(functions.createUser()).toEqual({ // toEqual testing for an Array or object
		firstName: 'Ronny', 
		lastName: 'Nijimbere' 
	});
});

//less than and greater than
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

//Regular expressions
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

//Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'daniella', 'admin'];
	expect('usernames').toContain('admin');
});

//Working with async data
//Promise
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);
	return functions.fetchUser()
	.then(data => {
		expect(data.name).toEqual('Leanne Graham');
	});	
});

//Async
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);
	const data = await functions.fetchUser()
	expect(data.name).toEqual('Leanne Graham');
});