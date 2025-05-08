import ImagePicker from "@/components/ui/image-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChatbotUIContext } from "@/context/context"
import { ASSISTANT_DESCRIPTION_MAX, ASSISTANT_NAME_MAX } from "@/db/limits"
import { Tables } from "@/supabase/types"
import { IconRobotFace } from "@tabler/icons-react"
import Image from "next/image"
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import ImagePicker from "@/components/ui/image-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChatbotUIContext } from "@/context/context"
import { ASSISTANT_DESCRIPTION_MAX, ASSISTANT_NAME_MAX } from "@/db/limits"
import { Tables } from "@/supabase/types"
import { IconRobotFace } from "@tabler/icons-react"
import Image from "next/image"
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}
 
export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)
  
  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false) 
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({ 
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,

^G Get Help           ^O WriteOut           ^R Read File          ^Y Prev Pg            ^K Cut Text           ^C Cur Pos            
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { IconRobotFace } from "@tabler/icons-react"   
import Image from "next/image"
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {  
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,

^G Get Help           ^O WriteOut           ^R Read File          ^Y Prev Pg            ^K Cut Text           ^C Cur Pos
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell

import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"

^G Get Help           ^O WriteOut           ^R Read File          ^Y Prev Pg            ^K Cut Text           ^C Cur Pos            
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
u^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
      } else {
        return [...prevState, file]
      }
    })
  }

  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]>
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
^X Exit               ^J Justify            ^W Where is           ^V Next Pg            ^U UnCut Text         ^T To Spell           
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"

interface AssistantItemProps {
  assistant: Tables<"assistants">
}

export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)

  const [name, setName] = useState(assistant.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(assistant.description)
  const [assistantChatSettings, setAssistantChatSettings] = useState({
    model: assistant.model,
    prompt: assistant.prompt,
    temperature: assistant.temperature,
    contextLength: assistant.context_length,
    includeProfileContext: assistant.include_profile_context,
    includeWorkspaceInstructions: assistant.include_workspace_instructions
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLink, setImageLink] = useState("")

  useEffect(() => {
    const assistantImage =
      assistantImages.find(image => image.path === assistant.image_path)
        ?.base64 || ""
    setImageLink(assistantImage)
  }, [assistant, assistantImages])

  const handleFileSelect = (
    file: Tables<"files">,
    setSelectedAssistantFiles: React.Dispatch<
      React.SetStateAction<Tables<"files">[]>
    >
  ) => {
    setSelectedAssistantFiles(prevState => {
      const isFileAlreadySelected = prevState.find(
        selectedFile => selectedFile.id === file.id
      )

      if (isFileAlreadySelected) {
        return prevState.filter(selectedFile => selectedFile.id !== file.id)
    }) 
  }   
   
  const handleCollectionSelect = (
    collection: Tables<"collections">,
    setSelectedAssistantCollections: React.Dispatch<
      React.SetStateAction<Tables<"collections">[]> 
    >
  ) => {
    setSelectedAssistantCollections(prevState => {
      const isCollectionAlreadySelected = prevState.find(
              selectedAssistantRetrievalItems={
                [              
                  ...renderState.selectedAssistantFiles,              
                  ...renderState.selectedAssistantCollections              
                ].length === 0              
                  ? [              
                      ...renderState.startingAssistantFiles,              
                      ...renderState.startingAssistantCollections              
                    ]              
                  : [              
                      ...renderState.star              selectedAssistantRetrievalItems={
                [
                  ...renderState.selectedAssistantFiles,
                  ...renderState.selectedAssistantCollections
                ].length === 0
                  ? [

^G Get Help           ^O WriteOut           ^R Read File          ^Y Prev Pg            ^K Cut Text           ^C Cur Pos            
^X Exit               ^J Justify            ^W Where is           ^V Next Pg     
