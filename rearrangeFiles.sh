#Rearrange files to match the urls
cp -r ./out/learn/get-started/* ./out/learn
cp -r ./out/learn/guides/* ./out/learn
cp -r ./out/learn/references/* ./out/learn

#Remove duplicated files
rm -rf ./out/learn/get-started/ ./out/learn/guides/ ./out/learn/references/