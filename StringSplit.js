const users = 'John david moris';

const avatar = users.split(' ').reduce((av, item) => av += item[0].toUpperCase(), '')
console.log(avatar);