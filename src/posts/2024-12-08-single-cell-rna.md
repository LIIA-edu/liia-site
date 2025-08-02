---
title: "Single-Cell RNA-seq: Unveiling Cellular Heterogeneity"
date: "2024-12-08"
tags: ["scRNA-seq", "Seurat", "Python", "Cell Biology"]
description: "Deep dive into single-cell RNA sequencing analysis, covering quality control, dimensionality reduction, and cell type identification using Seurat and scanpy."
readTime: "15 min read"
featured: true
slug: "single-cell-rna-seq"
---

# Single-Cell RNA-seq: Unveiling Cellular Heterogeneity

Single-cell RNA sequencing (scRNA-seq) has transformed our understanding of cellular diversity and function. This tutorial provides a comprehensive workflow for analyzing scRNA-seq data from raw counts to biological insights.

## Overview

We'll cover the complete analysis pipeline:

1. Data loading and preprocessing
2. Quality control and filtering
3. Normalization and scaling
4. Dimensionality reduction
5. Clustering and cell type identification
6. Differential expression analysis

## Getting Started with Seurat

### Data Loading

```r
library(Seurat)
library(dplyr)
library(ggplot2)

# Load 10X Genomics data
data <- Read10X(data.dir = "filtered_feature_bc_matrix/")

# Create Seurat object
seurat_obj <- CreateSeuratObject(counts = data,
                                project = "scRNA_analysis",
                                min.cells = 3,
                                min.features = 200)

# Add mitochondrial gene percentage
seurat_obj[["percent.mt"]] <- PercentageFeatureSet(seurat_obj, 
                                                  pattern = "^MT-")
```

### Quality Control

Visualize QC metrics to identify outliers:

```r
# Violin plots for QC metrics
VlnPlot(seurat_obj, 
        features = c("nFeature_RNA", "nCount_RNA", "percent.mt"),
        ncol = 3)

# Feature scatter plots
plot1 <- FeatureScatter(seurat_obj, feature1 = "nCount_RNA", 
                       feature2 = "percent.mt")
plot2 <- FeatureScatter(seurat_obj, feature1 = "nCount_RNA", 
                       feature2 = "nFeature_RNA")
plot1 + plot2
```

### Filtering

Apply quality control filters:

```r
# Filter cells and features
seurat_obj <- subset(seurat_obj, 
                    subset = nFeature_RNA > 200 & 
                            nFeature_RNA < 2500 & 
                            percent.mt < 5)
```

## Python Alternative with scanpy

```python
import scanpy as sc
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Set scanpy settings
sc.settings.verbosity = 3
sc.settings.set_figure_params(dpi=80, facecolor='white')

# Load data
adata = sc.read_10x_mtx(
    'filtered_feature_bc_matrix/',
    var_names='gene_symbols',
    cache=True
)

# Make variable names unique
adata.var_names_unique()

# Calculate QC metrics
adata.var['mt'] = adata.var_names.str.startswith('MT-')
sc.pp.calculate_qc_metrics(adata, percent_top=None, 
                          log1p=False, inplace=True)

# Add mitochondrial gene info
adata.var['mt'] = adata.var_names.str.startswith('MT-')
sc.pp.calculate_qc_metrics(adata, percent_top=None, 
                          log1p=False, inplace=True)

# Quality control plots
sc.pl.violin(adata, ['n_genes_by_counts', 'total_counts', 'pct_counts_mt'],
             jitter=0.4, multi_panel=True)
```

## Normalization and Scaling

### Seurat Approach

```r
# Normalize data
seurat_obj <- NormalizeData(seurat_obj, 
                           normalization.method = "LogNormalize",
                           scale.factor = 10000)

# Find highly variable features
seurat_obj <- FindVariableFeatures(seurat_obj, 
                                  selection.method = "vst",
                                  nfeatures = 2000)

# Identify top 10 most variable genes
top10 <- head(VariableFeatures(seurat_obj), 10)

# Plot variable features
plot1 <- VariableFeaturePlot(seurat_obj)
plot2 <- LabelPoints(plot = plot1, points = top10, repel = TRUE)
plot1 + plot2

# Scale data
all.genes <- rownames(seurat_obj)
seurat_obj <- ScaleData(seurat_obj, features = all.genes)
```

### scanpy Approach

```python
# Filter cells and genes
sc.pp.filter_cells(adata, min_genes=200)
sc.pp.filter_genes(adata, min_cells=3)

# Filter for quality
adata = adata[adata.obs.n_genes_by_counts < 2500, :]
adata = adata[adata.obs.pct_counts_mt < 5, :].copy()

# Save raw data
adata.raw = adata

# Normalize to 10,000 reads per cell
sc.pp.normalize_total(adata, target_sum=1e4)

# Log transform
sc.pp.log1p(adata)

# Find highly variable genes
sc.pp.highly_variable_genes(adata, min_mean=0.0125, 
                           max_mean=3, min_disp=0.5)

# Plot highly variable genes
sc.pl.highly_variable_genes(adata)

# Keep only highly variable genes
adata = adata[:, adata.var.highly_variable]

# Scale data
sc.pp.scale(adata, max_value=10)
```

## Dimensionality Reduction

### Principal Component Analysis

```r
# Run PCA
seurat_obj <- RunPCA(seurat_obj, features = VariableFeatures(object = seurat_obj))

# Visualize PCA results
print(seurat_obj[["pca"]], dims = 1:5, nfeatures = 5)
VizDimLoadings(seurat_obj, dims = 1:2, reduction = "pca")
DimPlot(seurat_obj, reduction = "pca")

# Determine dimensionality
ElbowPlot(seurat_obj)
```

### UMAP and t-SNE

```r
# Run UMAP
seurat_obj <- RunUMAP(seurat_obj, dims = 1:10)

# Run t-SNE
seurat_obj <- RunTSNE(seurat_obj, dims = 1:10)

# Visualize
p1 <- DimPlot(seurat_obj, reduction = "umap")
p2 <- DimPlot(seurat_obj, reduction = "tsne")
p1 + p2
```

### Python Implementation

```python
# Principal component analysis
sc.tl.pca(adata, svd_solver='arpack')
sc.pl.pca_variance_ratio(adata, log=True, n_pcs=50)

# Compute neighborhood graph
sc.pp.neighbors(adata, n_neighbors=10, n_pcs=40)

# Run UMAP
sc.tl.umap(adata)

# Visualize
sc.pl.umap(adata, color=['total_counts', 'n_genes_by_counts'])
```

## Clustering

### Find Clusters

```r
# Find neighbors and clusters
seurat_obj <- FindNeighbors(seurat_obj, dims = 1:10)
seurat_obj <- FindClusters(seurat_obj, resolution = 0.5)

# Visualize clusters
DimPlot(seurat_obj, reduction = "umap", label = TRUE)
```

### Scanpy Clustering

```python
# Leiden clustering
sc.tl.leiden(adata)

# Plot results
sc.pl.umap(adata, color=['leiden'], legend_loc='on data',
           legend_fontsize=12, legend_fontoutline=2)
```

## Cell Type Identification

### Find Marker Genes

```r
# Find all markers
cluster_markers <- FindAllMarkers(seurat_obj, 
                                 only.pos = TRUE,
                                 min.pct = 0.25,
                                 logfc.threshold = 0.25)

# Top markers per cluster
top_markers <- cluster_markers %>%
  group_by(cluster) %>%
  slice_max(n = 2, order_by = avg_log2FC)

# Heatmap of top markers
DoHeatmap(seurat_obj, features = top_markers$gene) + NoLegend()
```

### Annotate Cell Types

```r
# Manual annotation based on known markers
new.cluster.ids <- c("Naive CD4 T", "CD14+ Mono", "Memory CD4 T",
                    "B", "CD8 T", "FCGR3A+ Mono", "NK", "DC", "Platelet")
names(new.cluster.ids) <- levels(seurat_obj)
seurat_obj <- RenameIdents(seurat_obj, new.cluster.ids)

DimPlot(seurat_obj, reduction = "umap", label = TRUE, pt.size = 0.5) +
  NoLegend()
```

## Conclusion

This workflow provides a solid foundation for scRNA-seq analysis. Key points:

- Quality control is crucial for reliable results
- Choose dimensionality reduction parameters carefully
- Validate cell type annotations with known markers
- Consider batch effects in experimental design

Both Seurat and scanpy offer powerful tools for single-cell analysis, with similar capabilities but different syntax preferences.