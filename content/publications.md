<!-- ============================================================
PUBLICATIONS / RESEARCH PAPERS
============================================================
Each publication = a block of:

  ---
  (yaml frontmatter: id, title, venue, year, authors, abstract,
   link, pdf, code, slides, tags)
  ---
  (markdown body: optional extra content for the detail page only,
   e.g. a "## Citation" heading with a ```bibtex fenced block```.
   Leave the body empty if you don't need anything extra.)

Separate multiple publications with a line containing only: %%%

REQUIRED frontmatter fields: id, title, venue, year, abstract
OPTIONAL frontmatter fields: authors, link, pdf, code, slides, tags

  id:       URL-safe slug. Must be unique.
  title:    Full paper title.
  venue:    Conference or journal name.
  year:     Year of publication (number).
  authors:  List of author names (you first).
  abstract: Full abstract text. Use | for a multi-line block.
  link:     URL to the published paper (DOI page, publisher site, etc.)
  pdf:      Path to a local PDF (e.g. resources/papers/x.pdf) or a URL.
  code:     GitHub/code URL for this paper. Leave "" to hide.
  slides:   URL or path to presentation slides. Leave "" to hide.
  tags:     List of topic tags.

To add a new publication: copy one whole block below (from its
opening --- down to just before the next %%%), paste it after the
last publication, separated by its own %%% line, and fill it in.
============================================================ -->

---
id: quantum-amenable-bayesian-2024
title: "Towards Quantum Amenable Bayesian Networks: Classical Transformation to Facilitate Quantum Inference"
venue: Journal of Quantum Machine Intelligence
year: 2024
authors:
  - Padmil Nayak
abstract: |
  Inference in Bayesian networks has been an interesting area of research due to the ability of Bayesian networks
  to accurately model uncertainty in complex use-cases. Performing inference by utilizing quantum computing is
  possible due to recent works in the area and readily available quantum hardware. However, there are certain
  limits in terms of qubits when it comes to large-scale Bayesian network inference.

  We propose a novel segmentation-based approach to perform piece-meal inference on Bayesian networks, where
  individual segments are run as an independent quantum circuit and act as a prior circuit for downstream
  segments. In the case of larger and more complex individual segments, we propose Quantum Amenable Classical
  Transformation (QACT) to channel the likelihoods through a newly added intermediate node, thereby reducing the
  complexity of the network.

  Experimental results on various benchmark Bayesian networks demonstrate that the combined use of segmentation
  and QACT significantly reduces the qubit requirements compared to the existing QBN approach, without any
  statistically significant impact on inference accuracy.
link: "https://link.springer.com/article/10.1007/s42484-024-00227-3"
pdf: ""
code: ""
slides: ""
tags:
  - Quantum Computing
  - Bayesian Networks
  - QACT
  - Quantum Inference
---
## Citation

```bibtex
@article{nayak2024towards,
  title={Towards Quantum Amenable Bayesian Networks: Classical Transformation to Facilitate Quantum Inference},
  author={Nayak, Padmil},
  journal={Journal of Quantum Machine Intelligence},
  year={2024},
  publisher={Springer}
}
```

%%%

---
id: hybrid-quantum-inference-2023
title: Evaluation of Hybrid Quantum Approximate Inference Methods on Bayesian Networks
venue: International Conference on Big Data Analytics (Presented at IIIT Delhi)
year: 2023
authors:
  - Padmil Nayak
abstract: |
  Bayesian networks are a type of probabilistic graphical model widely used to characterize various real-world
  problem scenarios due to their ability to model probabilistic dependence between variables. In classical
  Bayesian networks, performing exact as well as approximate inference is NP-Hard. A quantum circuit developed to
  represent a Bayesian network can be used to perform inference, but it is prone to quantum noise and strictly
  limited by the maximum number of shots that can be performed on the quantum hardware.

  In this paper, we propose a technique to implement hybrid quantum approximate inference methods and
  subsequently analyze their performance on the quantum circuit representation of the Bayesian network. The
  approach involves computing priors and conditionals from the quantum-circuit-generated samples to perform
  likelihood-weighted sampling and MCMC-based sampling. The intuition behind this approach is that a quantum
  circuit can compromise the structural dependency of the Bayesian network due to decoherence errors and also has
  difficulty encoding the probability of rare events, which can be overcome with the help of hybrid quantum
  inference techniques.

  Error analysis on different types of queries was carried out to compare the sampling approaches for three
  Bayesian networks. All experiments in this paper use the SV1 quantum simulator provided by the Amazon Braket
  environment.
link: "https://link.springer.com/chapter/10.1007/978-3-031-49601-1_10"
pdf: ""
code: ""
slides: ""
tags:
  - Quantum Computing
  - Bayesian Networks
  - Approximate Inference
  - Amazon Braket
---
## Citation

```bibtex
@inproceedings{nayak2023evaluation,
  title={Evaluation of Hybrid Quantum Approximate Inference Methods on Bayesian Networks},
  author={Nayak, Padmil},
  booktitle={International Conference on Big Data Analytics},
  year={2023},
  publisher={Springer}
}
```
