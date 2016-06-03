import sys, os
import re

def fileToDict(file):
	'''
	>>> filesToDict(['testRead1.txt','testRead2.txt']) == {'testRead1.txt': 'one\\ntwo\\n', 'testRead2.txt': 'three\\nfour\\nthree\\n'}
	True
	
	'''
	result = {}

	with open('data/' + file, 'r') as document:
		for line in document:
			line = line.split()
			if not line:  # empty line?
				continue
			result[line[0]] = line[1:]
			#print line[0]
			#print result[line[0]]
		return result

phonemeDict = fileToDict('cmudict.txt')
rulesDict = fileToDict('phonemesrules.txt')

def transcribeText(text):
	transcribedText = []
	#print text
	text = re.sub(r'[^\w]', ' ', text)
	#print text
	text = text.upper()
	#print text
	splitText = text.split()
	for word in splitText:
		transcribedText.append(phonemeDict[word])
	#print transcribedText
	return transcribedText
	
transcribedPhrase = transcribeText("Hello! My name is James? I don't know!")

def phonemesToRules(transcribedText):
	rulesWords = []
	for word in transcribedText:
		rulesWord = []
		for phoneme in word:
			rulesWord.append(rulesDict[phoneme])
		rulesWords.append(rulesWord)
	return rulesWords

#print phonemesToRules(transcribedPhrase)