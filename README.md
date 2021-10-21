# Obsidian Lineup Builder Plugin


This plugin allows you to build football lineups in Obsidian by specifying a formation and a list of players.

The lineup is defined in a codeblock and is visible in Preview mode.
  

## Using the Plugin

To create a lineup you need to define a `lineup` codeblock with the following options:
  
### Formation

The `formation` option is one of the currently available formations:

- 433
- 4231
- 442
- 442-diamond

### Players

The `players` option defines the starting 11, ordered from bottom to top and left to right.

i.e. for a 433: Mendy,Chilwell,Silva,Rudiger,James,Mount,Jorginho,Kante,Werner,Lukaku,Havertz
  

### Example

````
```lineup
formation: 4231
players: Kepa,Chilwell,Silva,Rudi,Azpi,Kante,Kovacic,CHO,Mount,Havertz,Lukaku
```
````

![Example](media/example_screenshot.png)

