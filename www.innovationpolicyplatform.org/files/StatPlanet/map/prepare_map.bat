@Echo Off
@For /F "tokens=1,2,3,4 delims=:,. " %%A in ('echo %time%') do @(
Set Hour=%%A
Set Min=%%B
Set Sec=%%C
Set mSec=%%D
Set All=%%A%%B%%C%%D
)
ren map.js map_old_%All%.js
type mapheader.txt >> map.js
for /r %%i in (*.json) do (
   type %%~nxi >> map.js

)
for /r %%i in (*.geojson) do (
   type %%~nxi >> map.js

)
