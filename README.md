Sympathy
====

## Overview
Service to make university education interactive

#### *About Speaker Deck
Share Presentations without the Mess

## Tables

### Rooms
|title|likes_count|speaker_deck|professor_id|
|:---:|:--------:|:-----:|:-----:|
|string|integer  |string   |references|

### Professors
|name|email|password|
|:-----:|:---:|:------:|
|string  |string|string |

### Comments
|nickname|room_id|text|
|:----------:|:-----:|:--:|
|string |integer|text|

### Likes
|room_id|
|:----------:|
|references  |

## Asociation

### Room
- belongs_to :professor
- has_many :likes
- has_many :comments

### Professor
- has_many :rooms

### comment
- belongs_to :room

### like
- belongs_to :room

## Team
sympathy
