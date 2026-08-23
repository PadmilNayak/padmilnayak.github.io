<!-- ============================================================
PROJECTS
============================================================
Each project = a block of:

  ---
  (yaml frontmatter: id, title, description, image, tags, github,
   demo, paper, gallery)
  ---
  (markdown body: the full write-up shown on the project's detail
   page — use ## headings, bullet lists, and ```code fences``` freely)

Separate multiple projects with a line containing only: %%%

REQUIRED frontmatter fields: id, title, description
OPTIONAL frontmatter fields: image, tags, github, demo, paper, gallery

  id:          URL-safe slug (no spaces, use hyphens). Must be unique.
  title:       Project title, shown on the card and detail page.
  description: One or two sentence summary shown on the homepage card.
  image:       Hero image path or URL. Leave blank for a placeholder.
               Store images in resources/images/projects/
  tags:        List of technology/topic tags shown as chips.
  github:      GitHub repo URL. Leave "" to hide the button.
  demo:        Live demo URL. Leave "" to hide the button.
  paper:       Related paper/publication URL. Leave "" to hide.
  gallery:     Optional list of extra images at the bottom of the
               detail page: [{image: path, caption: text}, ...]

The markdown body becomes the "Overview" section on the detail page.
Use "## Some Heading" for subsections and normal ``` fenced code
blocks for code samples — they get syntax highlighting and a Copy
button automatically.

To add a new project: copy one whole block below (from its opening
--- down to just before the next %%%), paste it after the last
project, separated by its own %%% line, and fill it in.
============================================================ -->

---
id: cortex
title: "Cortex – AI Video Knowledge Assistant"
description: Production RAG application enabling grounded conversational search over a YouTube video knowledge base, with citations traceable to the exact source timestamp.
image: resources/images/projects/cortex.svg
tags:
  - LLM
  - RAG
  - GCP
  - FastAPI
github: ""
demo: "https://cortex.padmilnayak.com"
paper: ""
---
Cortex turns a library of YouTube videos into a conversational knowledge base. Instead of scrubbing through hours of footage, you ask a question in plain language and get an answer grounded in the source material — with every claim traceable back to the exact video and timestamp it came from.

## Key Features

- Semantic chunking of video transcripts paired with dense vector retrieval for grounded, conversational search
- Relevance-threshold retrieval filtering so only genuinely relevant passages reach the language model
- Sentence-level citation grounding — every generated claim links back to its exact source video and timestamp
- Containerized FastAPI backend deployed on GCP Cloud Run with Firestore for persistence
- CI/CD pipeline that automatically deploys on every push to production

## Technical Details

The retrieval layer combines semantic chunking with dense embeddings so that search results reflect meaning rather than keyword overlap. A relevance threshold filters out low-confidence matches before they ever reach the LLM, which keeps hallucination in check and keeps every generated answer anchored to real source content.

The backend is a containerized FastAPI service running on GCP Cloud Run, backed by Firestore for conversation and index persistence. A CI/CD pipeline redeploys the service automatically on every push, so shipping an improvement is a normal `git push`.

%%%

---
id: clix
title: "Clix – Local-First AI Photo Search"
description: A fully offline photo-intelligence engine using OpenCLIP embeddings and FAISS for natural-language and reverse-image semantic search, with zero cloud inference calls.
image: resources/images/projects/clix.svg
tags:
  - Computer Vision
  - Vector Search
  - FAISS
  - Python
github: ""
demo: ""
paper: ""
---
Clix is a fully offline photo-intelligence engine: search your photo library using natural language or a reference image, with no cloud inference calls and no data ever leaving the machine.

## Key Features

- OpenCLIP (ViT-B/32) generates joint image/text embeddings for natural-language and reverse-image semantic search
- FAISS-indexed vector search runs entirely offline with zero cloud inference calls
- Two-tier face-clustering system: real-time incremental FAISS nearest-neighbor matching, paired with a self-implemented Union-Find batch-reclustering pass over pairwise cosine similarity
- A decoupled storage layer with memory-mapped embedding stores scales semantic search to hundreds of thousands of photos without loading all vectors into memory

## Technical Details

Every photo is embedded into a shared image/text space using OpenCLIP, which is what makes both "search by description" and "search by example image" possible from the same index. FAISS handles nearest-neighbor lookups at scale.

Face clustering runs in two tiers: new faces are matched incrementally against existing clusters in real time via FAISS nearest-neighbor search, while a background batch pass periodically re-clusters using a self-implemented Union-Find over pairwise cosine similarity to correct any drift from the incremental pass. Memory-mapped embedding stores keep the whole system usable on a normal laptop even at hundreds of thousands of photos, since vectors are read from disk on demand rather than held entirely in RAM.

%%%

---
id: image-captioning
title: Image Caption Generation with Bahdanau Attention
description: A deep learning architecture combining a pre-trained CNN encoder with an attention-based LSTM decoder for sequential caption generation, reproducing the "Show, Attend and Tell" approach.
image: resources/images/projects/image-captioning.svg
tags:
  - Deep Learning
  - TensorFlow
  - Computer Vision
  - NLP
github: ""
demo: ""
paper: ""
---
An implementation of the classic "Show, Attend and Tell" architecture: a pre-trained CNN extracts image features, and an attention-based LSTM decoder generates a natural-language caption one word at a time, attending to a different region of the image at each step.

## Key Features

- Pre-trained CNN encoder for image feature extraction
- Bahdanau (additive) attention mechanism so the decoder focuses on relevant image regions per generated word
- LSTM-based sequential decoder producing natural-language captions
- Reproduces the "Show, Attend and Tell" approach from the original paper

## Technical Details

The encoder is a pre-trained convolutional network with the classification head removed, producing a spatial feature map rather than a single vector. At each decoding step, a Bahdanau attention layer computes a weighted combination of that feature map conditioned on the decoder's current hidden state, letting the model "look" at a different part of the image as it generates each word of the caption. The LSTM decoder consumes the attended context vector alongside the previously generated word to produce the next token.

%%%

---
id: hybrid-recommender
title: Ensemble Learning for Hybrid Recommender System
description: A hybrid recommender system combining collaborative filtering and content-based filtering to predict movie ratings, achieving a 12%+ improvement in prediction error over single-method baselines.
image: resources/images/projects/recommender-system.svg
tags:
  - Python
  - Collaborative Filtering
  - Content-Based Filtering
  - Ensemble Learning
github: ""
demo: ""
paper: ""
---
A hybrid movie recommender that blends collaborative filtering and content-based filtering to predict user ratings, outperforming either method used on its own.

## Key Features

- Collaborative filtering component that learns from user-item rating patterns
- Content-based filtering component that leverages item metadata/features
- Ensemble combination of both signals to predict final ratings
- 12%+ improvement in prediction error over single-method baselines

## Technical Details

Collaborative filtering captures signal from the collective behavior of similar users, but struggles with new or sparsely-rated items ("cold start"). Content-based filtering fills that gap by using item features directly, but on its own it under-uses the wisdom-of-the-crowd signal that collaborative methods pick up. Combining the two as an ensemble lets each method compensate for the other's weak spot, which is what drove the measured improvement in prediction error over either baseline alone.
