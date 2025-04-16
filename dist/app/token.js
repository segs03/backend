"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
exports.verifyToken = `
<div>
<form method="post" action="http://localhost:5000/token/verify-token">
<h2> Verify Token </h2>
<label for="Verify token">
<input type="text" placeholder="paste token" name="token"/>
<button type="submit"> verify token</button>
</form>
</div>
`;
