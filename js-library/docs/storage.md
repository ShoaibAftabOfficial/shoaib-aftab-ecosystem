# Storage Module

Easily handle localStorage and sessionStorage with automatic JSON parsing/stringifying.

### Local Storage

```javascript
SAT.storage.local.set('user', { name: 'Shoaib', id: 1 });

const user = SAT.storage.local.get('user');
console.log(user.name); // 'Shoaib'

SAT.storage.local.remove('user');
SAT.storage.local.clear();
```

### Session Storage

```javascript
SAT.storage.session.set('token', 'abc-123');

const token = SAT.storage.session.get('token');
console.log(token); // 'abc-123'
```
