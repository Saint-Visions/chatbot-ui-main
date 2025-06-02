import { FileItemChunk } from "@/types"
import { encode } from "gpt-tokenizer"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { CHUNK_OVERLAP, CHUNK_SIZE } from "."

export const processPDF = async (pdf: Blob): Promise<FileItemChunk[]> => {
  const text = await pdf.text()

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    separators: ["\n\n"]
  })

  const splitDocs = await splitter.createDocuments([text])

  const chunks: FileItemChunk[] = []

  for (const doc of splitDocs) {
    chunks.push({
      content: doc.pageContent,
      tokens: encode(doc.pageContent).length
    })
  }

  return chunks
}
