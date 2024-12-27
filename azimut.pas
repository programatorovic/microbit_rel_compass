var initialAzimuth: Integer;

procedure SetAzimut(azimut: Integer);
begin
  initialAzimuth := azimut;
end;

function GetCompassRel(heading:integer):Integer;
// vstup heading je aktualny stav kompasu <0..360)
var relativeHeading: Integer;
begin
  relativeHeading := heading - initialAzimuth;
  if relativeHeading > 180 then
    relativeHeading := relativeHeading - 360
  else if relativeHeading < -180 then
    relativeHeading := relativeHeading + 360;
  Result := relativeHeading;
end;
// vystup je relativny odklon od zvoleneho azimutu.
