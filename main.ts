controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -30
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(13)
// Main program
let list = [assets.image`myCat`, assets.image`mySnake`, assets.image`myShroom`]
mySprite = sprites.create(list.removeAt(randint(0, list.length - 1)), SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
controller.moveSprite(mySprite)
game.onUpdate(function () {
    mySprite.setVelocity(0, 60)
})
