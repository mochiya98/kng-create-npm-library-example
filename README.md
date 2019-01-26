# kng-create-npm-library-example

> 月刊ブラウザでもnodeでも動くライブラリを作る

## Module usage examples

[see docs](https://github.m98.be/kng-create-npm-library-example/)

## ToDo

- [ ] `package.main` をビルド済み `umd` にしておくこと
- [ ] `package.module` を `esm` にしておくこと
	- バンドルはしなくてもいい、しない方が良い
	- 可能な範囲で `esm` ベースの開発を
## etc.

- `npm publish` する前に、 `npm pack` で変なファイルが混じらないかチェックできる
- `publish` すると取り返しが付かないので注意
	- 多少できることもありますが、制約付きなので、それぐらいの気持ちでやること
