# Split SVG Parts

These files are split from `../file.svg`, the Adobe-converted SVG source.

- `yt-letters.svg`: Y / T letterforms
- `sword.svg`: central sword
- `staff.svg`: five-line staff
- `music-symbols.svg`: treble clef and note symbols
- `bat.svg`: bat motifs
- `hexagon-frame.svg`: hexagonal frame
- `programming-text.svg`: programming text blocks
- `circuit-board.svg`: circuit-board traces and nodes

Notes:

- The source SVG has no semantic groups, so paths are separated by observed coordinate bounds and path clusters.
- `staff.svg` and `music-symbols.svg` use clip paths because Adobe merged some music shapes into shared traced paths.
- The parts keep their original Adobe path fills and use a transparent background.
