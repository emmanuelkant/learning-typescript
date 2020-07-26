// type Alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user }`)
}

type Platform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Windows')
// renderPlatform('ios')  // Error

logDetails(123, 'shoes ')
logDetails('123', 'shoes')

logInfo(123, 'kant')
logInfo('123', 'kant')