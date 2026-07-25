trung.nguyentq@VN-OTS-XQLPF6K noted-cli % ./bin/noted version 2>&1; echo "exit: $?"
./bin/noted version --json 2>&1; echo "exit: $?"
./bin/noted whatever 2>&1; echo "exit: $?"
0.1.0
exit: 0
{"version":"0.1.0"}
exit: 0
unknown command: whatever
exit: 2